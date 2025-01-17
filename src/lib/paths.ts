import { GraphConfig } from 'src/config/config'
import { NodeTypeToken } from 'src/model/graph'
import { GraphLink } from 'src/model/link'
import { GraphNode } from 'src/model/node'
import { Vector } from 'vecti'

// ##################################################
// COMMON
// ##################################################

export interface PathParams<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
> {
  config: GraphConfig<T, Node, Link>
  source: Node
  target: Node
}

export interface ReflexivePathParams<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
> {
  config: GraphConfig<T, Node, Link>
  node: Node
  center: Vector
}

function getX<T extends NodeTypeToken, Node extends GraphNode<T>>(
  node: Node
): number {
  return node.x ?? 0
}

function getY<T extends NodeTypeToken, Node extends GraphNode<T>>(
  node: Node
): number {
  return node.y ?? 0
}

interface VectorData {
  s: Vector
  t: Vector
  dist: number
  norm: Vector
  endNorm: Vector
}

function calculateVectorData<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ source, target }: PathParams<T, Node, Link>): VectorData {
  const s = new Vector(getX(source), getY(source))
  const t = new Vector(getX(target), getY(target))
  const diff = t.subtract(s)
  const dist = diff.length()
  const norm = diff.normalize()
  const endNorm = norm.multiply(-1)
  return {
    s,
    t,
    dist,
    norm,
    endNorm,
  }
}

function calculateCenter<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ center, node }: ReflexivePathParams<T, Node, Link>) {
  const n = new Vector(getX(node), getY(node))
  let c = center
  if (n.x === c.x && n.y === c.y) {
    // Nodes at the exact center of the Graph should have their reflexive edge above them.
    c = c.add(new Vector(0, 1))
  }
  return {
    n,
    c,
  }
}

function calculateSourceAndTarget<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ config, source, target }: PathParams<T, Node, Link>) {
  const { s, t, norm } = calculateVectorData({ config, source, target })
  const start = s.add(norm.multiply(config.getNodeRadius(source) - 1))
  const end = t.subtract(
    norm.multiply(config.marker.getMarkerPadding(target, config))
  )
  return {
    start,
    end,
  }
}

// ##################################################
// LINE
// ##################################################

function paddedLinePath<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>(params: PathParams<T, Node, Link>): string {
  const { start, end } = calculateSourceAndTarget(params)
  return `M${start.x},${start.y}
          L${end.x},${end.y}`
}

function lineLinkTextTransform<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>(params: PathParams<T, Node, Link>): string {
  const { start, end } = calculateSourceAndTarget(params)

  const midpoint = end.subtract(start).multiply(0.5)
  const result = start.add(midpoint)

  return `translate(${result.x - 8},${result.y - 4})`
}

// ##################################################
// ARC
// ##################################################

function paddedArcPath<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ config, source, target }: PathParams<T, Node, Link>): string {
  const { s, t, dist, norm, endNorm } = calculateVectorData({
    config,
    source,
    target,
  })
  const rotation = 10
  const start = norm
    .rotateByDegrees(-rotation)
    .multiply(config.getNodeRadius(source) - 1)
    .add(s)
  const end = endNorm
    .rotateByDegrees(rotation)
    .multiply(config.getNodeRadius(target))
    .add(t)
    .add(
      endNorm
        .rotateByDegrees(rotation)
        .multiply(2 * config.marker.markerBoxSize)
    )
  const arcRadius = 1.2 * dist
  return `M${start.x},${start.y}
          A${arcRadius},${arcRadius},0,0,1,${end.x},${end.y}`
}

// ##################################################
// REFLEXIVE
// ##################################################

function paddedReflexivePath<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ center, config, node }: ReflexivePathParams<T, Node, Link>): string {
  const { n, c } = calculateCenter({ center, config, node })
  const radius = config.getNodeRadius(node)
  const diff = n.subtract(c)
  const norm = diff.multiply(1 / diff.length())
  const rotation = 40
  const start = norm
    .rotateByDegrees(rotation)
    .multiply(radius - 1)
    .add(n)
  const end = norm
    .rotateByDegrees(-rotation)
    .multiply(radius)
    .add(n)
    .add(
      norm.rotateByDegrees(-rotation).multiply(2 * config.marker.markerBoxSize)
    )
  return `M${start.x},${start.y}
          A${radius},${radius},0,1,0,${end.x},${end.y}`
}

function bidirectionalLinkTextTransform<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ config, source, target }: PathParams<T, Node, Link>): string {
  const { t, dist, endNorm } = calculateVectorData({ config, source, target })
  const rotation = 10
  const end = endNorm
    .rotateByDegrees(rotation)
    .multiply(0.5 * dist)
    .add(t)
  return `translate(${end.x},${end.y})`
}

function reflexiveLinkTextTransform<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({ center, config, node }: ReflexivePathParams<T, Node, Link>): string {
  const { n, c } = calculateCenter({ center, config, node })
  const diff = n.subtract(c)
  const offset = diff
    .multiply(1 / diff.length())
    .multiply(3 * config.getNodeRadius(node) + 8)
    .add(n)
  return `translate(${offset.x},${offset.y})`
}

// ##################################################
// EXPORT
// ##################################################

export default {
  line: {
    labelTransform: lineLinkTextTransform,
    path: paddedLinePath,
  },
  arc: {
    labelTransform: bidirectionalLinkTextTransform,
    path: paddedArcPath,
  },
  reflexive: {
    labelTransform: reflexiveLinkTextTransform,
    path: paddedReflexivePath,
  },
}

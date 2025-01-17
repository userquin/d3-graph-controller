import { Selection } from 'd3-selection'
import { GraphConfig } from 'src/config/config'
import { Canvas } from 'src/lib/canvas'
import { Graph, NodeTypeToken } from 'src/model/graph'
import { getMarkerId, GraphLink } from 'src/model/link'
import { GraphNode } from 'src/model/node'

export type MarkerSelection = Selection<
  SVGMarkerElement,
  string,
  SVGGElement,
  undefined
>

export function defineMarkerSelection(canvas: Canvas): MarkerSelection {
  return canvas.append('defs').selectAll('marker')
}

export interface CreateMarkerParams<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
> {
  config: GraphConfig<T, Node, Link>
  graph: Graph<T, Node, Link>
  selection?: MarkerSelection | undefined
}

export function createMarkers<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>({
  config,
  graph,
  selection,
}: CreateMarkerParams<T, Node, Link>): MarkerSelection | undefined {
  return selection
    ?.data(getUniqueColors(graph), (d) => d)
    .join((enter) => {
      const marker = enter
        .append('marker')
        .attr('id', (d) => getMarkerId(d))
        .attr('markerHeight', 4 * config.marker.markerBoxSize)
        .attr('markerWidth', 4 * config.marker.markerBoxSize)
        .attr('markerUnits', 'userSpaceOnUse')
        .attr('orient', 'auto')
        .attr('refX', config.marker.markerRef[0])
        .attr('refY', config.marker.markerRef[1])
        .attr('viewBox', config.marker.markerPath)
        .style('fill', (d) => d)
      marker.append('path').attr('d', makeLine(config.marker.markerPoints))
      return marker
    })
}

function getUniqueColors<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>(graph: Graph<T, Node, Link>): string[] {
  return [...new Set(graph.links.map((link) => link.color))]
}

function makeLine(points: [number, number][]): string {
  if (points.length < 1) {
    return 'M0,0'
  }
  const [[startX, startY], ...rest] = points
  return rest.reduce(
    (line, [x, y]) => line + `L${x},${y}`,
    `M${startX},${startY}`
  )
}

import { Alphas } from 'src/config/alpha'
import { Callbacks } from 'src/config/callbacks'
import { createDefaultForces, SimulationForceConfig } from 'src/config/forces'
import {
  createDefaultInitialGraphSettings,
  InitialGraphSettings,
} from 'src/config/initial'
import { MarkerConfig, Markers } from 'src/config/marker'
import { Modifiers } from 'src/config/modifiers'
import { PositionInitializer, PositionInitializers } from 'src/config/position'
import { ZoomConfig } from 'src/config/zoom'
import { NodeTypeToken } from 'src/model/graph'
import { GraphLink } from 'src/model/link'
import { GraphNode } from 'src/model/node'
import merge from 'ts-deepmerge'

export interface GraphConfig<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
> {
  /**
   * Alpha value configuration for controlling simulation activity.
   */
  alphas: Alphas<T, Node>
  /**
   * Set to true to enable automatic resizing.
   * Warning: Do call shutdown(), once the controller is no longer required.
   */
  autoResize: boolean
  /**
   * Callback configuration.
   */
  callbacks: Callbacks<T, Node>
  /**
   * Simulation force configuration.
   */
  forces: SimulationForceConfig<T, Node, Link>
  /**
   * Get the radius of a node for the simulation and visualization.
   * @param node - The node.
   * @returns The node's radius.
   */
  getNodeRadius(node: Node): number // TODO: rename to nodeRadius
  /**
   * Get the length of a link for the simulation.
   * @param link - The link.
   * @returns The link's length.
   */
  getLinkLength(link: Link): number // TODO: move to forces.link
  /**
   * Initial settings of a controller.
   */
  initial: InitialGraphSettings<T, Node, Link>
  /**
   * Marker configuration.
   */
  marker: MarkerConfig
  /**
   * Low-level callbacks for modifying the underlying d3-selection.
   */
  modifiers: Modifiers<T, Node>
  /**
   * Initializes a node's position in context of a graph's width and height.
   */
  positionInitializer: PositionInitializer<NodeTypeToken, Node>
  /**
   * Zoom configuration.
   */
  zoom: ZoomConfig
}

function defaultGraphConfig<
  T extends NodeTypeToken,
  Node extends GraphNode<T>,
  Link extends GraphLink<T, Node>
>(): GraphConfig<T, Node, Link> {
  return {
    alphas: {
      drag: {
        end: 0,
        start: 0.1,
      },
      filter: {
        link: 1,
        type: 0.1,
        unlinked: {
          include: 0.1,
          exclude: 0.1,
        },
      },
      focus: {
        acquire: () => 0.1,
        release: () => 0.1,
      },
      initialize: 1,
      labels: {
        links: {
          hide: 0,
          show: 0,
        },
        nodes: {
          hide: 0,
          show: 0,
        },
      },
      resize: 0.5,
    },
    autoResize: false,
    callbacks: {},
    forces: createDefaultForces(),
    initial: createDefaultInitialGraphSettings(),
    getLinkLength: () => 128,
    getNodeRadius: () => 16,
    marker: Markers.Arrow(4),
    modifiers: {},
    positionInitializer: PositionInitializers.Centered,
    zoom: {
      initial: 1,
      min: 0.1,
      max: 2,
    },
  }
}

/**
 * Utility type for deeply partial objects.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

/**
 * Define the configuration of a controller.
 * Will be merged with the default configuration.
 * @param config - The partial configuration.
 * @returns The merged configuration.
 */
export function defineGraphConfig<
  T extends NodeTypeToken = NodeTypeToken,
  Node extends GraphNode<T> = GraphNode<T>,
  Link extends GraphLink<T, Node> = GraphLink<T, Node>
>(
  config: DeepPartial<GraphConfig<T, Node, Link>> = {}
): GraphConfig<T, Node, Link> {
  return merge.withOptions(
    { mergeArrays: false },
    defaultGraphConfig<T, Node, Link>(),
    config
  )
}

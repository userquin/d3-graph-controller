/**
 * Zoom configuration.
 */
export interface ZoomConfig {
  /**
   * The initial zoom.
   * Must be in range [min, max].
   */
  initial: number
  /**
   * Maximum zoom level.
   * May not be smaller than initial zoom.
   */
  max: number
  /**
   * Minimum zoom level.
   * May not be larger than initial zoom or less than or equal to 0.
   */
  min: number
}

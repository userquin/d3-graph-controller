import { filterGraph } from 'src/lib/filter'
import { GraphLink } from 'src/model/link'
import TestData, { TestNodeType } from 'test/test-data'
import { describe, expect, it } from 'vitest'

describe.concurrent('filter', () => {
  it('can filter nothing', () => {
    const filteredResult = filterGraph({
      filter: ['first', 'second'],
      focusedNode: undefined,
      includeUnlinked: true,
      linkFilter: () => true,
      graph: TestData.graph,
    })
    expect(filteredResult).toEqual(TestData.graph)
  })

  it('can filter by type', () => {
    const filteredResult = filterGraph({
      filter: ['first'],
      focusedNode: undefined,
      includeUnlinked: false,
      linkFilter: () => true,
      graph: TestData.graph,
    })
    expect(filteredResult.nodes).toEqual(
      TestData.graph.nodes.filter((node) => node.type === 'first')
    )
  })

  it('can filter unlinked', () => {
    const filteredResult = filterGraph({
      filter: ['first', 'second'],
      focusedNode: undefined,
      includeUnlinked: false,
      linkFilter: () => true,
      graph: TestData.graph,
    })
    expect(filteredResult.nodes).toEqual(
      TestData.graph.nodes.filter((node) =>
        TestData.graph.links.some(
          (link) => link.source.id === node.id || link.target.id === node.id
        )
      )
    )
    expect(filteredResult.links).toEqual(TestData.graph.links)
  })

  it('can filter links', () => {
    const filteredResult = filterGraph({
      filter: ['first', 'second'],
      focusedNode: undefined,
      includeUnlinked: true,
      linkFilter: (link: GraphLink<TestNodeType>) =>
        link.source.id === link.target.id,
      graph: TestData.graph,
    })
    expect(filteredResult.links.length).toEqual(1)
  })
})

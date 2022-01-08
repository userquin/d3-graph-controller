import{a as n}from"./app.072e5e9e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h1><p>Both behavior and visuals of graphs can be customized by passing additional parameters to <code>defineGraphConfig()</code>.</p><h2 id="callbacks" tabindex="-1"><a class="header-anchor" href="#callbacks" aria-hidden="true">#</a> Callbacks</h2><h3 id="nodeclicked" tabindex="-1"><a class="header-anchor" href="#nodeclicked" aria-hidden="true">#</a> nodeClicked</h3><p>The <code>nodeClicked</code> callback is called whenever a node is double-clicked (using the primary mouse button) or double-tapped in a short time. If set, the default behavior of focusing a node is disabled.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GraphNode<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  callbacks<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">nodeClicked</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> GraphNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="initial-settings" tabindex="-1"><a class="header-anchor" href="#initial-settings" aria-hidden="true">#</a> Initial settings</h2><p>The <code>GraphController</code> settings that can be changed after initialization can have their initial values configured. The reference below shows the default configuration.</p><p><code>linkFilter</code> receives a link as its parameter.</p><p><code>nodeTypeFilter</code> is an array of type tokens. Only nodes whose type is included in the array will be shown. If omitted, the graph will include all nodes.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  initial<span class="token operator">:</span> <span class="token punctuation">{</span>
    includeUnlinked<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">linkFilter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    nodeTypeFilter<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    showLinkLabels<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showNodeLabels<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="markers" tabindex="-1"><a class="header-anchor" href="#markers" aria-hidden="true">#</a> Markers</h2><p>Markers are displayed at the end of links. Because precise marker dimensions are required for path calculations, it is necessary to provide a lot of data. Hence, it is recommended to only use the default marker <code>Markers.Arrow</code> with customizable size as seen below.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Markers<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  marker<span class="token operator">:</span> Markers<span class="token punctuation">.</span><span class="token function">Arrow</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h2><p>If absolute control is required, <code>modifiers</code> can be used to customize the d3-selections.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GraphNode<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Selection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-selection&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modifiers<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">node</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      selection<span class="token operator">:</span> Selection<span class="token operator">&lt;</span>SVGCircleElement<span class="token punctuation">,</span> GraphNode<span class="token punctuation">,</span> SVGGElement<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// Define custom callbacks or visuals</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Configuring modifiers is generally only required for custom control schemes. Do not forget to unset <code>pointerdown</code> and <code>contextmenu</code> if required.</p></div><h2 id="node-radius" tabindex="-1"><a class="header-anchor" href="#node-radius" aria-hidden="true">#</a> Node radius</h2><p>The radius of nodes is used for their visualization as well as the underlying simulation. It can be configured using the <code>getNodeRadius</code> property of the config. You can use instances to calculate dynamic node radii.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GraphNode<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">CustomNode</span> <span class="token operator">=</span> GraphNode <span class="token operator">&amp;</span> <span class="token punctuation">{</span> radius<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineGraphConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> CustomNode<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">getNodeRadius</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> CustomNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>radius<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="position-initialization" tabindex="-1"><a class="header-anchor" href="#position-initialization" aria-hidden="true">#</a> Position initialization</h2><p>When a <code>GraphController</code> is created, it initializes the positions of nodes that do not have their coordinates set. The behavior of this initialization can be customized by providing a <code>PositionInitializer</code>. A <code>PositionInitializer</code> is a function that receives a <code>GraphNode</code> as well as the width and height of a graph and returns two coordinates. This library provides two <code>PositionInitializer</code>s out of the box.</p><p>By default, <code>PositionInitializers.Centered</code> is used. Alternatively, <code>PositionInitializers.Randomized</code> or custom implementations can be used.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PositionInitializers<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  positionInitializer<span class="token operator">:</span> PositionInitializers<span class="token punctuation">.</span>Randomized<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="resizing" tabindex="-1"><a class="header-anchor" href="#resizing" aria-hidden="true">#</a> Resizing</h2><p>Graphs can be resized to fit their container. This can either happen manually by calling a <code>GraphController</code>&#39;s <code>resize</code> method or automatically by setting <code>autoResize</code> to <code>true</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  autoResize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="simulation" tabindex="-1"><a class="header-anchor" href="#simulation" aria-hidden="true">#</a> Simulation</h2><p>The interactivity of the graph is driven by a d3 simulation. Its forces and behavior can be configured for precise control.</p><h3 id="alphas" tabindex="-1"><a class="header-anchor" href="#alphas" aria-hidden="true">#</a> Alphas</h3><p>Alpha values determine the <em>heat</em> or <em>activity</em> of the similation. The higher the value, the stronger the simulation will react. After certain actions, the simulations needs to be restarted. The alpha values for those restarts can be configured. Reference the default configuration below for the available options.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GraphNode<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  alphas<span class="token operator">:</span> <span class="token punctuation">{</span>
    drag<span class="token operator">:</span> <span class="token punctuation">{</span>
      end<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      start<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    filter<span class="token operator">:</span> <span class="token punctuation">{</span>
      link<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
      unlinked<span class="token operator">:</span> <span class="token punctuation">{</span>
        include<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        exclude<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    focus<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">acquire</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> GraphNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
      <span class="token function-variable function">release</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> GraphNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    initialize<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    labels<span class="token operator">:</span> <span class="token punctuation">{</span>
      links<span class="token operator">:</span> <span class="token punctuation">{</span>
        hide<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      nodes<span class="token operator">:</span> <span class="token punctuation">{</span>
        hide<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    resize<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>alphas.focus.acquire</code> and <code>alphas.focus.release</code> receive the (un-)focused node as a parameter. <code>alphas.resize</code> can either be a static <code>number</code> or a function receiving a <code>ResizeContext</code> as its parameter.</p></div><h3 id="forces" tabindex="-1"><a class="header-anchor" href="#forces" aria-hidden="true">#</a> Forces</h3><p>Forces can be customized or disabled as required. Some forces provide additional customizability. Reference the configuration below, which matches the default values.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Settings <code>forces.collision.radiusMultiplier</code> to a higher value can drastically reduce the number of intersecting edges.</p></div><p>All <code>strength</code> properties can also be functions that receive the subject of the force as a parameter for individual strength. Except <code>forces.link</code>, the subject is always a <code>GraphNode</code> (or the custom type used).</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  forces<span class="token operator">:</span> <span class="token punctuation">{</span>
    centering<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      strength<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    charge<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      strength<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    collision<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      strength<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      radiusMultiplier<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token punctuation">{</span>
      enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      strength<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="link-length" tabindex="-1"><a class="header-anchor" href="#link-length" aria-hidden="true">#</a> Link length</h3><p>Link length is used to determine the length of links for the simulation. Similar to node radii, link length can be configured on a per-link basis. Once again, custom link types can be used to provide the required data.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This property will be moved to <code>forces.link</code> in a future release.</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GraphLink<span class="token punctuation">,</span> GraphNode<span class="token punctuation">,</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">CustomLink</span> <span class="token operator">=</span> GraphLink <span class="token operator">&amp;</span> <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineGraphConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> GraphNode<span class="token punctuation">,</span> CustomLink<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">getLinkLength</span><span class="token operator">:</span> <span class="token punctuation">(</span>link<span class="token operator">:</span> CustomLink<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> link<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> Zoom</h2><p>For the zooming functionality, the initial value as well as its boundaries can be configured as seen below.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Currently, there&#39;s no validation of the values. The <code>min</code> value must be larger than 0 and the initial value must be withing the range <code>[min, max]</code>.</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGraphConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;d3-graph-controller&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineGraphConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  zoom<span class="token operator">:</span> <span class="token punctuation">{</span>
    initial<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    min<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,47);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};

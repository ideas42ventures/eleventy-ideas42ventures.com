const tokens = {
  color: [
    ["--color-electric-panther", "#e81756"],
    ["--color-nuclear-pumpkin", "#ff7a00"],
    ["--color-moon-over-maroon", "#43212c"],
    ["--color-text-primary", "var(--color-moon-over-maroon)"],
  ],
};

module.exports = {
  sections: {
    color() {
      const swatches = `<ul class="colors">${tokens.color.reduce(
        (str, [prop, val]) => `${str}<li class="color">
          <b class="color__swatch" style="--color: ${val}"></b>
          <div class="color__details">
            <input value="${prop}" readonly />
            <input value="${val}" readonly />
          </div>
         </li>`,
        ""
      )}</ul>`;

      return swatches;
    },
    typography() {
      return `
      <ul class="token__list">
        <li class="font">
          <h3 class="token__sample font--display">Aglet Slab</h3>
          <div class="token__info">
            <p>
              Ultra weight only, 900. via Adobe Fonts (Typekit)
            </p>

            <code>--font-display</code>
            <code>.font--display</code>
          </div>
        </li>
        <li class="font">
          <h3 class="token__sample font--body">Inter</h3>
          <div class="token__info">
            <p>
              Used for all standard text.
            </p>
            <!--
            <code>--font-body</code>
            <code>.font--body</code>
            -->
          </div>
        </li>
      </ul>
      <h3 class="topic__subtitle">Headings</h3>
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </div>

  <h3 class="topic__subtitle">Body Text</h3>
  <div>
    <p>This is a regular paragraph of text set in our body font family.</p>
  </div>
  <div>
    <strong>A strong element</strong>
    <br />
    <b>A b element</b>
    <br />
    <em>An emphasized element</em>
    <br />
    <i>An i element</i>
  </div>`;
    },
    grid() {
      return `<p>
      This isn’t an attempt at a full, responsive CSS grid system. This is a set
      of classes and custom properties to help set the width and height of
      elements, margin, padding, etc. to keep layout consistent.
    </p>
    <p>
      We offer classes and custom properties for setting widths on elements.
    </p>`;
    },
  },
};

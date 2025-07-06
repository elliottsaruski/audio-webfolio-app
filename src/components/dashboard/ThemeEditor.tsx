function ThemeEditor() {
  //onSubmit={handleSubmit}
  return (
    <form>
      <label>
        <p>Theme Name</p>
        <input type="text" name="theme_name" placeholder="Theme Name" />
      </label>

      <label>
        <p>Primary Color</p>
        <input type="text" name="primary_color" placeholder="#ffffff" />
      </label>

      <label>
        <p>Accent Color</p>
        <input type="text" name="accent_color" placeholder="#ff0000" />
      </label>

      <label>
        <p>Font Color</p>
        <input type="text" name="font_color" placeholder="#000000" />
      </label>

      <label>
        <p>Background URL (image or gradient string)</p>
        <input type="file" name="background_url" />
      </label>

      <label>
        <p>Background Type</p>
        <select name="background_type">
          <option value="color">Color</option>
          <option value="gradient">Gradient</option>
          <option value="image">Image</option>
        </select>
      </label>

      <label>
        <p>Font (Google Font string)</p>
        <input type="text" name="font" placeholder="e.g. 'Inter', sans-serif" />
      </label>

      <label>
        <input type="checkbox" name="is_preset" />
        <p>Save as Preset Theme</p>
      </label>

      <button type="submit">Save Theme</button>
    </form>
  );
}

export default ThemeEditor;

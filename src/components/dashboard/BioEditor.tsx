function BioEditor() {
  return (
    //onSubmit={handleSubmit}

    <form>
      <label>
        <p>Display Name</p>
        <input
          type="text"
          name="display_name"
          placeholder="Display Name"
          required
        />
      </label>

      <label>
        <p>Handle</p>
        <input
          type="text"
          name="handle"
          placeholder="Handle (e.g. elliott)"
          disabled
        />
      </label>

      <label>
        <p>Creator Type</p>
        <select name="creator_type">
          <option value="">Select Creator Type</option>
          <option value="artist">Artist</option>
          <option value="podcaster">Podcaster</option>
          <option value="sound_designer">Sound Designer</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        <p>Bio</p>
        <textarea name="bio" placeholder="Bio" rows={4} />
      </label>

      <label>
        <p>Avatar URL</p>
        <input type="url" name="avatar_url" />
      </label>

      <label>
        <p>Social Links (JSON format or future UI builder)</p>
        <textarea
          name="social_links"
          placeholder='{"twitter":"...", "instagram":"..."}'
          rows={3}
        />
      </label>
      <label>
        <input type="checkbox" name="bio_visible" />
        <p>Show Bio on Public Page</p>
      </label>
      <button type="submit">Save Profile</button>
    </form>
  );
}

export default BioEditor;

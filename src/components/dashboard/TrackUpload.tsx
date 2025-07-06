function TrackUpload() {
  return (
    //onSubmit={handleSubmit}
    <form>
      <label>
        <p>Track Title</p>
        <input
          type="text"
          name="title"
          placeholder="Track Title"
          required
          // className={sharedstyles.input}
        />
      </label>

      <label>
        <p>Artist Name</p>
        <input
          type="text"
          name="artist_name"
          placeholder="Primary Artist Name"
          required
        />{" "}
      </label>

      <label>
        <p>Audio File</p>
        <input
          type="file"
          name="audio_url"
          placeholder="Audio File URL"
          required
        />
      </label>

      <label>
        <p>Cover Image</p>
        <input type="file" name="cover_url" placeholder="Cover Image URL" />
      </label>

      <label>
        <p>Released date</p>
        <input type="date" name="release_date" />
      </label>

      <label>
        <p>Additional Artists</p>
        <input
          type="text"
          name="additional_artists"
          placeholder="Comma-separated list"
        />
      </label>

      <label>
        <input type="checkbox" name="is_upcoming" />
        <p>Upcoming Release</p>
      </label>
      <label>
        <p>Upcoming Release date</p>
        <input
          type="url"
          name="presave_url"
          placeholder="Pre-save Link (if any)"
        />
      </label>

      <label>
        <input type="checkbox" name="is_pinned" />
        <p>Pin to Profile</p>
      </label>

      <label>
        <input type="checkbox" name="is_active" />
        <p>Show on Page</p>
      </label>

      <label>
        <input type="checkbox" name="is_private" />
        <p>Private Track</p>
      </label>

      <label>
        <p>Wave Color</p>
        <input
          type="text"
          name="wave_color"
          placeholder="Wave Color (e.g. #fff)"
        />
      </label>

      <label>
        <p>Progress Color</p>
        <input type="text" name="progress_color" placeholder="Progress Color" />
      </label>
      <label>
        <p>Bar Width</p>
        <input type="number" name="bar_width" placeholder="Bar Width" />
      </label>
      <label>
        <p>Bar Spacing</p>
        <input type="number" name="bar_spacing" placeholder="Bar Spacing" />
      </label>
      <label>
        <p>Sort Order</p>
        <input
          type="number"
          name="sort_order"
          placeholder="Sort Order (0 = top)"
        />
      </label>

      <button
        type="submit"
        //   className={sharedstyles.button}
      >
        Save Track
      </button>
    </form>
  );
}

export default TrackUpload;

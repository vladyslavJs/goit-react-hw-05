export default function SearchMovies() {
    return (
        <div>
            <form>
                <label>
                    <input type="text"
                        name="search"
                        autoFocus
                        placeholder="Enter the movie title" />
                </label>
            </form>
        </div>
    );
}
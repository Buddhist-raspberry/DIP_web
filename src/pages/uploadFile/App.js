import './App.css';
import Upload from "./Upload"

function App() {
  return (
    <Upload
        onComplete={(e) => console.log(e)}
        endpoint="http://121.4.219.235:1080/files"
        maxFileSize={104857600}
        // allowedFileTypes={["video/*"]}
    />
)
}

export default App;

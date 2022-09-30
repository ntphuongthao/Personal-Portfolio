import { FaFileDownload } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export default function DownloadButton() {
  return (
    <Button className="downloadButton">
      <FaFileDownload />
    </Button>
  );
}

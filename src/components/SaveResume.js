import { Button } from "@mui/material";
import PageNavigation from "./PageNavigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useReactToPrint } from 'react-to-print';

const SaveResume = () => {

  const handleDownloadPDF = useReactToPrint({
    content: () => document.getElementById("template-2"),
    onBeforePrint: () => {
      console.log('LOADING____BEFORE PRINT')
        // setLoading(true)
    },
    onAfterPrint: () => {
      console.log('LOADING____AFTER PRINT')
        // setLoading(false)
    }
  });

  // Used html2canvas and jspdf but styles were not coming as expected using tailwind 
  const handleGeneratePDF = async () => {
    const input = document.getElementById("template-2");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    });
    let ratio = canvas.width / canvas.height;
    let width = pdf.internal.pageSize.getWidth();
    let height = width / ratio;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("document.pdf");
  };

  return (
    <>
      <PageNavigation prev="/editor/summary" next="/" />
      <div
        className="px-6 py-4 rounded-md border"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
          borderTop: "3px solid #800000",
        }}
      >
        <h1 className="text-xl font-semibold">Save Resume</h1>
        <p className="text-gray-400">Download your Resume.</p>
        <div className="text-center my-8">
          <Button
            variant="contained"
            onClick={handleDownloadPDF}
            sx={{ textTransform: "none", gap: "8px" }}
          >
            <CloudDownloadIcon /> Download Resume
          </Button>
        </div>
      </div>
    </>
  );
};
export default SaveResume;

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the download PDF button
    const downloadButton = document.querySelector('.download-pdf a');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Alert the user about how to generate a PDF
            alert('To generate a PDF of this resume: \n\n1. Use your browser\'s print functionality (Ctrl+P or Cmd+P)\n2. Set the destination to "Save as PDF"\n3. Set margins to "None" for best results\n4. Save the file as "srinivas_peri_resume.pdf"');
            
            // You could also use a library like html2pdf.js or jsPDF for better PDF generation,
            // but this simple approach works in most browsers
            window.print();
        });
    }
}); 
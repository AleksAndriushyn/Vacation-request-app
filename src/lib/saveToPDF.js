import html2pdf from 'html2pdf.js';

export const saveToPDF = (contentRef) => {
	const element = contentRef.current;
	const opt = {
		filename: 'Vacation.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2, useCORS: true },
		jsPDF: { unit: 'in', format: 'a4', orientation: 'p' },
	};
	html2pdf().from(element).set(opt).save();
};

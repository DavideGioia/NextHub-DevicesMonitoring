function downloadList(printerList) {
    const link = document.createElement("a");
    let content = printerList;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    link.download = "Stampanti "+ today.toLocaleDateString() +".txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };


function Sidebar({ toggle }) {
    return <div className="sidebar">
        <h1>CV Generator</h1>
        <h2>by Kate Schumacher</h2>
        <p>Click on text to edit it. When you're finished you can export the page as a PDF for printing.</p>
        <button onClick={toggle}>Toggle icon</button>
        <button onClick={() => window.print()}>Print</button>
    </div>
}

export { Sidebar }
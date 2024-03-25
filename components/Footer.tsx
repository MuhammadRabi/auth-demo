const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white text-center text-sm mx-auto place-items-bottom p-4">
      <p>Quotes App Copyrights &copy; {currentYear}</p>
    </footer>
  )
}

export default Footer

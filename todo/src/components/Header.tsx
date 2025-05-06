function Header() {
  return (
    <div className="flex flex-col pt-5 pb-5 ">
      <h1 className="text-3xl font-bold">오늘은 📆</h1>
      <span className="text-2xl py-3">{new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}</span>
    </div>
  )
}

export default Header

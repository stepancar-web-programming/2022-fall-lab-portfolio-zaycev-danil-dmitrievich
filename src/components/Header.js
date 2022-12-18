
function Header () {
  return (
      <header className="d-flex justify-between align-center p-40">
        <a href='/'>
            <div className="d-flex align-center">
              <img width={80} height={40} alt='' src="/img/logo.png"/>
              <div>
                  <h3 className="text-uppercase">P33211 ПИиКТ</h3>
                  <p className="opacity-5">Лучшая группа</p>
              </div>
            </div>
        </a>
        <div><a href='/univer'> О нашем Университете</a></div>
      </header>
  )
}

export default Header

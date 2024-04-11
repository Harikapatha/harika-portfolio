import coverImage from '../../assets/cover/coverimage.jpeg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Harika Portfolio</h1>
      <img src={coverImage} alt="wooden background" width={2000}></img>
      {props.children}
    </header>
  );
}

export default Header;

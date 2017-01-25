import React, { Component } from 'react';
import styles from '../../style/navbar.css';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router';
import NavMainMenu from './nav_menu';
import About from './about';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = { mainMenuOpen: false, infoOpen: false, doneOpen: false, mobile: false }
  }
  componentWillMount(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    this.setState({mobile: check});
  }
  toggleMenu = () => {
    this.setState({ mainMenuOpen: !this.state.mainMenuOpen, infoOpen: false, doneOpen: false})
  }
  toggleInfo = () => {
    this.setState({ infoOpen: !this.state.infoOpen, mainMenuOpen: false, doneOpen: false })
  }

  handleEndAnimationInfo = () =>{
    this.setState({ doneOpen: !this.state.doneOpen })
  }

  renderMotion = (menu) =>{ 

    return (
      <Motion onRest={menu.type =='info' ? this.handleEndAnimationInfo : null} style={{y: spring(menu.open ? menu.springVal : 0)}}>
        {({y}) => 
          <div className={menu.type == 'main' ? styles.mainMenu : styles.infoMenu} style={{
                  WebkitTransform: `translate3d(${y}${menu.translate3d},0 , 0)`,
                  transform: `translate3d(${y}${menu.translate3d},0 , 0)`,
                }}>
            {menu.type == 'main' ? <NavMainMenu toggleMenu={this.toggleMenu}/> : <About doneOpen={this.state.doneOpen} />}
          </div>}
      </Motion>
      )
  }
 
  render(){
  const { mainMenuOpen, infoOpen } = this.state;
    return (
      <div className={styles.header}>
          <Link to='/'><img className={styles.img} src='https://s3.amazonaws.com/www.danielrodriguez.io/vendor/img/logo-personal.png'/> </Link>
          <div className={styles.closeX} onClick={this.toggleMenu} >
            <div className={mainMenuOpen ? styles.line1Active : styles.line1}></div>
            <div className={mainMenuOpen ? styles.line2Active : styles.line2}></div>
            <div className={mainMenuOpen ? styles.line3Active : styles.line3}></div>
          </div>
          <div onClick={this.toggleInfo} className={styles.info}><b>info</b></div>
        <div className={styles.navLeft}>
        </div>
        <a href='https://www.linkedin.com/in/drodriguez56' target="blanck"><FontAwesome className={styles.linkedIn} name='linkedin' /></a>
        <a href='https://angel.co/drodriguez56' target="blanck"><FontAwesome className={styles.angelList} name='angellist' /></a>
        <a href='https://github.com/drodriguez56' target="blanck"><FontAwesome className={styles.github} name='github' /></a>
        {this.renderMotion({type: 'main', springVal: !this.state.mobile ? -400 : -100, open: this.state.mainMenuOpen, translate3d: !this.state.mobile ? 'px' : '%' })}
        {this.renderMotion({type: 'info', springVal: -100, open: this.state.infoOpen, translate3d: '%' })}
      </div> 
      );
  } 
}
import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div id="nav">
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/879/879815.svg" alt="cart-icon" />
                    <span style={styles.cartCount}>{this.props.qty}</span>
                </div>
        </div>
        )
    }
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      fontWeight:'bold',
      right: 0,
      top: -9
    }
  };

export default Navbar;
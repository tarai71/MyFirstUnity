var player : GameObject;
var shootPowerX : float = 400.0;
var shootPowerY : float = 400.0;

function Update () {
	if ( Input.GetButtonDown("Fire1") ) {
		player.rigidbody.AddForce(shootPowerX, shootPowerY, 0);
	}
}
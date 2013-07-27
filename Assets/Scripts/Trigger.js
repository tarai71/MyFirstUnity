
function OnGUI () {
	if ( GUI.Button(Rect(10, 10, 50, 50), "Reset") ) {
		Application.LoadLevel("TestScene");
	}
}
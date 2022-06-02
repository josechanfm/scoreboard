<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Home page
 */
class Score_control extends MY_Controller {

	public function index()
	{
		$this->add_script('../judo/assets/dist/vue/score_control_vue.js');

		$this->render('score_control');
	}
}

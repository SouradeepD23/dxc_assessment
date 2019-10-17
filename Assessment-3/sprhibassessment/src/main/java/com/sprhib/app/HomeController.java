package com.sprhib.app;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.sprhib.dao.FootballerDao;
import com.sprhib.model.Footballer;


@Controller
public class HomeController {
	
	@Autowired
	FootballerDao footballerDao;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		return "home";
	}
	
	@RequestMapping(value="/saveBaller")
	public String saveBaller(@ModelAttribute Footballer footballer) {
		footballerDao.saveFootballer(footballer);
		return "home";
	}
	
	@RequestMapping(value="/displayBaller")
	public String displayBaller(Model model, @RequestParam("playerName") String playerName) {
		Footballer footballer=footballerDao.getFootballer(playerName);
		model.addAttribute("footballer", footballer);
		return "display";
	}
	
	@RequestMapping(value="/displayAllBallers")
	public String displayAllBallers(Model model, @ModelAttribute Footballer baller) {
		ArrayList<Footballer> footballers = footballerDao.getFootballers();
		model.addAttribute("footballers", footballers);
		return "displayAll";
	}
	
	@RequestMapping(value="/deleteBaller")
	public String deleteBaller(@RequestParam("playerName") String playerName) {
		footballerDao.deleteFootballer(playerName);
		return "home";
	}
	
	@RequestMapping(value="/updateBaller")
	public String updateBaller(@ModelAttribute Footballer baller) {
		footballerDao.updateFootballer(baller);
		return "home";
	}
	
}


package com.adelement.dao;

import java.util.Arrays;
import java.util.List;

public class MySqlDataServiceImpl
implements DataService {

	public List<String> getAllHeadlines() {
		return Arrays.asList("Headlines1","Headlines2");
	}

	public List<String> getAllSubHeadlines() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<String> getImagesPath() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<String> getAllButtons() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean saveAds(String headline, String subHeadline, String image,
			String button) {
		// TODO Auto-generated method stub
		return false;
	}

}
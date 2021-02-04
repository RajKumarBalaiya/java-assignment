package com.java.assignment.app.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.java.assignment.app.dto.JavaTestDto;

@Service
public class JavaAssignmentService {
	private static final int MAXIMUM_SUGGESTION_LENGTH = 5;
	private List<String> products = Arrays.asList("rajkumar", "kumar", "rahman", "krish", "rahul", "kannan");

	public JavaTestDto javaTestDao;

	public JavaTestDto groupAnagrams(String[] anagrams) {
		if (anagrams.length == 0)
			return null;
		javaTestDao = new JavaTestDto();
		Map<String, List<String>> ans = new HashMap<String, List<String>>();
		for (String s : anagrams) {
			char[] ca = s.toCharArray();
			Arrays.sort(ca);
			String key = String.valueOf(ca);
			if (!ans.containsKey(key))
				ans.put(key, new ArrayList<>());
			ans.get(key).add(s);
		}
		javaTestDao.setResults(ans.values().toString());
		return javaTestDao;
	}

	public JavaTestDto phoneDirectorySearchList(String searchWord) {
		if (searchWord == null || searchWord.isEmpty())
			return null;
		javaTestDao = new JavaTestDto();
		List<String> suggestion = null;
		StringBuilder sb = new StringBuilder();
		Collections.sort(products);
		for (int i = 0; i < searchWord.length(); i++) {
			char c = searchWord.charAt(i);
			sb.append(c);
			suggestion = new ArrayList<>();
			for (int j = 0; j < products.size(); j++) {
				if (products.get(j).startsWith(sb.toString())) {
					if (suggestion.size() < MAXIMUM_SUGGESTION_LENGTH) {
						suggestion.add(products.get(j));
					}
				}
			}
			javaTestDao.setSearchWords(suggestion);
		}
		return javaTestDao;
	}

	public JavaTestDto phoneDirectoryList() {
		javaTestDao = new JavaTestDto();
		javaTestDao.setSearchWords(products);
		return javaTestDao;
	}

}

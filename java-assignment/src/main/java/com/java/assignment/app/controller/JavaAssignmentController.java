package com.java.assignment.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.java.assignment.app.dto.JavaTestDto;
import com.java.assignment.app.services.JavaAssignmentService;

@RestController
@RequestMapping("/java-assignment")
@CrossOrigin(origins = "*")
public class JavaAssignmentController {

	@Autowired
	private JavaAssignmentService javaTestService;

	@RequestMapping(value = "/anagrams", method = RequestMethod.GET)
	public ResponseEntity<JavaTestDto> getGroupAnagrams(@RequestParam String anagramsList) {
		JavaTestDto groupAnagrams = javaTestService.groupAnagrams(anagramsList.split(","));
		return ResponseEntity.status(HttpStatus.OK).body(groupAnagrams);

	}

	@GetMapping("/phone-directory-search")
	public ResponseEntity<JavaTestDto> getPhoneDirectoryMatch(@RequestParam String searchWord) {
		JavaTestDto matchingNames = javaTestService.phoneDirectorySearchList(searchWord);
		return ResponseEntity.status(HttpStatus.OK).body(matchingNames);

	}

	@GetMapping("/phone-directory")
	public ResponseEntity<JavaTestDto> getPhoneDirectoryList() {
		JavaTestDto matchingNames = javaTestService.phoneDirectoryList();
		return ResponseEntity.status(HttpStatus.OK).body(matchingNames);

	}
}

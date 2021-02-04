package com.java.assignment.app.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude
public class JavaTestDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String results;
	private List<String> searchWords;

	public String getResults() {
		return results;
	}

	public void setResults(String results) {
		this.results = results;
	}

	public List<String> getSearchWords() {
		return searchWords;
	}

	public void setSearchWords(List<String> searchWords) {
		this.searchWords = searchWords;
	}

}

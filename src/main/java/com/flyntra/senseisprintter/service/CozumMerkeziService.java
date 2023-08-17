package com.flyntra.senseisprintter.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CozumMerkeziService {

    @Autowired
    WebClientService webClientService;
    private final Logger logger = LoggerFactory.getLogger(CozumMerkeziService.class);
    private static final String URL = "COZUM-MERKEZI-API";

    public String getCozumMerkeziData() {
        return URL;
    }

}

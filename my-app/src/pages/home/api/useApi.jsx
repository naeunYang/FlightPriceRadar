import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export function testApiCall(){
    const queryKey = ["test123"];

    const { data, error } = useQuery({
        queryKey,
        queryFn: async () => {
            const response = await axios.get("/api/test");

            return response.data;
        },
        retry: 3, //실패 시 재시도 횟수
	    refetchOnWindowFocus: false, // 창 포커스 시 데이터 리패치 비활성화
    })

    return data;
}
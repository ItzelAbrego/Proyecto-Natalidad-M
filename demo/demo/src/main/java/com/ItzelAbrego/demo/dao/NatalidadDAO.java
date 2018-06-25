package com.ItzelAbrego.demo.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ItzelAbrego.demo.entity.Natalidad;

@Repository
public class NatalidadDAO {

	public 	List<Natalidad> getNatalidad() {
		List<Natalidad> list = new ArrayList<>();
		list.add(new Natalidad(1, 1990, 2735312, 1378259, 1356261,	28.55, 3.47));
		list.add(new Natalidad(2, 1991, 2756447, 1389667, 1365868,	28.10, 3.37));
		list.add(new Natalidad(3, 1992, 2797397, 1410179, 1386794, 27.65, 3.27));
		list.add(new Natalidad(4, 1993, 2839686, 1425959, 1412862,	27.21, 3.18));
		list.add(new Natalidad(5, 1994, 2904389, 1462458, 1441367,	26.77, 3.10));
		list.add(new Natalidad(6, 1995, 2750444, 1387458, 1362547,	26.34, 3.02));
		list.add(new Natalidad(7, 1996, 2707718, 1365863, 1341619,	25.90, 2.95));
		list.add(new Natalidad(8, 1997, 2698425, 1359672, 1338539,	25.46, 2.88));
		list.add(new Natalidad(9, 1998, 2668428, 1345837, 1322244,	25.02, 2.82));
		list.add(new Natalidad(10, 1999, 2769089, 1384810, 1384000,	24.58, 2.77));
		list.add(new Natalidad(12, 2000, 2798339, 1398877, 1398703,	24.13, 2.72));
		list.add(new Natalidad(12, 2001, 2767610, 1390066, 1377151,	23.67, 2.67));
		list.add(new Natalidad(13, 2002, 2699084, 1345504, 1350142, 23.21, 2.62));
		list.add(new Natalidad(14, 2003, 2655894, 1307080, 1348354, 22.73, 2.58));
		list.add(new Natalidad(15, 2004, 2625056, 1302411, 1322074, 22.26, 2.54));
		list.add(new Natalidad(16, 2005,	2567906, 1284304, 1283009, 21.80, 2.50));
		list.add(new Natalidad(17, 2006,	2505939, 1254600, 1250937, 21.37, 2.46));
		list.add(new Natalidad(18, 2007,	2655083, 1330390, 1324087, 20.97, 2.42));
		list.add(new Natalidad(19, 2008,	2636110, 1320177, 1315435, 20.61, 2.39));
		list.add(new Natalidad(20, 2009,	2577214, 1296770, 1279883, 20.29, 2.36));
		list.add(new Natalidad(21, 2010,	2643908, 1326612, 1317023, 19.99, 2.34));
		list.add(new Natalidad(22, 2011, 2586287, 1300026, 1285962, 19.7, 2.32));
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		return list;
	}
}

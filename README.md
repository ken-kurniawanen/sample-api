#Tugas 8 Progweb#

**Anggota**

	1.15/381068/PA/16748 Randi Aulia Ramadhan
	2.15/383239/PA/16899 Kurniawan Eka Nugraha
	3.15/385650/PA/17039 Muhammad Rasyid Al Faruqi

##Overview##

Merupakan API sederhana dalam nodeJS express framework. Dimana API menyediakan data yang bisa diakses dalam format JSON. Data di database berupa sample data mahasiswa dan ip nya.

##GET all data##

This endpoint retrieves all data.

**HTTP Request**

    GET https://sandbox.apiplug.com:8443/tugas8progweb/v1/ip/
  

###GET specific data###

This endpoint retrieves specific data 

**HTTP Request**

    GET https://sandbox.apiplug.com:8443/tugas8progweb/v1/ip/<NIM>

**URL Parameter**

 Parameter     | Description                       
 ------------- | ---------------------------------
 NIM           | The NIM of the data to retrieve (1-5)




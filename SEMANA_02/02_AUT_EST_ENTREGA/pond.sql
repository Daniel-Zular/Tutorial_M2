CREATE TABLE user ( 
	user_key             INTEGER NOT NULL  PRIMARY KEY  ,
	nome                 VARCHAR(255)     
 );

CREATE TABLE experiencia ( 
	titulo               VARCHAR(255)     ,
	empresa              VARCHAR(255)     ,
	user_key             INTEGER     ,
	FOREIGN KEY ( user_key ) REFERENCES user( user_key )  
 );

CREATE TABLE formacao ( 
	titulo               VARCHAR(255)     ,
	instituicao          INTEGER     ,
	user_key             INTEGER     ,
	FOREIGN KEY ( user_key ) REFERENCES user( user_key )  
 );

CREATE TABLE realizacoes ( 
	titulo               VARCHAR(255)     ,
	data                 DATE     ,
	user_key             INTEGER     ,
	FOREIGN KEY ( user_key ) REFERENCES user( user_key )  
 );

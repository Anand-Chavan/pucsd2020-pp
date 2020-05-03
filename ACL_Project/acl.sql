use acl;

DROP TABLE  whoGroupCreated;
DROP TABLE  userGroupMap;
DROP TABLE  userPermission;
DROP TABLE  groupPermission;
DROP TABLE  content;
DROP TABLE  permission;
DROP TABLE  sessionInfo;
DROP TABLE  users;
DROP TABLE  groups; 


CREATE TABLE  users
(
	uName VARCHAR(30) NOT NULL,
	userId  VARCHAR(30) NOT NULL,
	password  VARCHAR(20) NOT NULL,
	dateCreation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
	userType VARCHAR(30) NOT NULL,
	PRIMARY KEY (userId)
);

CREATE TABLE  sessionInfo
(
	userId VARCHAR(30) NOT NULL,
	sessionId VARCHAR(20) NOT NULL,
	logintime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
	PRIMARY KEY (userId,sessionId)
);

CREATE TABLE  groups
(
	groupId  INT NOT NULL AUTO_INCREMENT,
	groupName  VARCHAR(30) NOT NULL,
	groupCreationDate  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
	groupDescription VARCHAR(20),
	PRIMARY KEY (groupId)
);

CREATE TABLE  whoGroupCreated
(
	userId VARCHAR(30),
	groupId INT,
	FOREIGN KEY (userId) REFERENCES users(userId),
	FOREIGN KEY (groupId) REFERENCES groups(groupId),
	PRIMARY KEY(groupId,userId)
);

CREATE TABLE  userGroupMap
(
	groupId  INT,
	userId  VARCHAR(30) NOT NULL,
	FOREIGN KEY (groupId) REFERENCES groups(groupId),
	FOREIGN KEY (userId) REFERENCES users(userId),
	PRIMARY KEY(groupId,userId)
);





CREATE TABLE  content(
	contentId int,
	contentName varchar(20),
	contentInfo varchar(2),
	PRIMARY KEY (contentId)
);

CREATE TABLE permission(
permissionValue varchar(20),
PRIMARY KEY(permissionValue)
);


CREATE TABLE  userPermission(
	userId  VARCHAR(30) NOT NULL,
	contentId int,
	permissionValue varchar(20),
	FOREIGN KEY (userId) REFERENCES users(userId),
	FOREIGN KEY (contentId) REFERENCES content(contentId),
	FOREIGN KEY (permissionValue) REFERENCES permission(permissionValue),
	PRIMARY KEY(userId,contentId,permissionValue)
);

CREATE TABLE  groupPermission(
	groupId  INT,
	contentId int,
	permissionValue varchar(20),
	FOREIGN KEY (groupId) REFERENCES groups(groupId),
	FOREIGN KEY (contentId) REFERENCES content(contentId),
	FOREIGN KEY (permissionValue) REFERENCES permission(permissionValue),
	PRIMARY KEY(groupId,contentId,permissionValue)
);


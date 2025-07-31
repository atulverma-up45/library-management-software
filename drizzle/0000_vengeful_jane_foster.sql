CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`username` varchar(50) NOT NULL,
	`email` varchar(80) NOT NULL,
	`password` varchar(80) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	`role` enum('SuperAdmin','Admin','Student') NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);

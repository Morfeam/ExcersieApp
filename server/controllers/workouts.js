

//hello

const express = require('express');
const workouts = require('../models/workouts');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        workouts.getAllWorkouts().then(x=> res.send( x.map(workout=> ({ ...workout}) ) ) )
        .catch(next);
    })
    .get('/:Owner_id', (req, res, next) => {
        workouts.getUserWorkouts().then(x=> res.send( x.map(workout=> ({ ...workout}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        workouts.getWorkout(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        workouts.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        workouts.addWorkout(
            req.body.Owner_id, 
            req.body.Privacy_Setting, 
            req.body.Time, 
            req.body.Exercise_Type, 
            req.body.Note, 
            req.body.Distance, 
            req.body.Other_Info,
        ).then(newWorkout => {
            res.send( newWorkout );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        workouts.removeWorkout(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;


//mysql 2 table creation code
/* 
CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `DOB` DATETIME NULL,
  `Password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ContactMethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ContactMethods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `update_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` VARCHAR(45) NOT NULL,
  `Value` VARCHAR(45) NOT NULL,
  `IsPrimary` BIT NOT NULL DEFAULT 0,
  `CanSpam` BIT NOT NULL DEFAULT 0,
  `User_id` INT NOT NULL,
  `Users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ContactMethods_Users_idx` (`Users_id` ASC) ,
  CONSTRAINT `fk_ContactMethods_Users`
    FOREIGN KEY (`Users_id`)
    REFERENCES `Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
*/
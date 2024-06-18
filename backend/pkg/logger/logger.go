package logger;


import (
	"fmt"
	"log"
	"os"
	"runtime"

)

//MODES that the logger can have
const (
	FULL = 1 << iota
	PARTIAL
	ERRORS
	DEBUG
	WARNING
)

const (
	reset  = "\033[0m"
	red    = "\033[31m"
	green  = "\033[32m"
	yellow = "\033[33m"
	blue   = "\033[34m"
	purple = "\033[35m"
	cyan   = "\033[36m"
	gray   = "\033[37m"
	white  = "\033[97m"
)

var loggerState = log.New(os.Stdout, purple+"STATE: "+reset, 7) //71
var loggerLog = log.New(os.Stdout, green+"LOG:   "+reset, 7)
var loggerErr = log.New(os.Stderr, red+"ERROR: "+reset, 7)
var loggerWarn = log.New(os.Stderr, yellow+"WARN:  "+reset, 7)
var loggerDebug = log.New(os.Stdout, blue+"DEBUG: "+reset, 7)
var loggerFatal = log.New(os.Stderr, red+"FATAL: "+reset, 7)

func getCallerInformation() string {
	pc, file, line, _ := runtime.Caller(2)
	//LoggerState.Printf(" %s:%d %v",file, line, info) ↪
	details := runtime.FuncForPC(pc)
	if details != nil {
		//return fmt.Sprintf("%s:%d", details.Name(), line)
		return fmt.Sprintf("%s:%d", file, line)
	}

	return ""
}

func formatMessage(format string, a ...interface{}) string {
	info := fmt.Sprintf(format, a...)
	return info
}

// Prints state of the app information. Information about systems that are working well.
func State(format string, a ...interface{}) {
	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		loggerState.Printf("%s: %s", details, info)

	} else {
		loggerState.Printf("%s", info)
	}
}

// this will call panic. Anything with fatal should not be allowed to recover.
func Fatal(format string, a ...interface{}) {
	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		//LoggerState.Printf(" %s:%d %v",file, line, info)

		loggerFatal.Panicf("%s: %s", details, info)

	} else {
		loggerFatal.Panicf("%s", info)
	}
}

//errors that do not have to do with the logic of the app, but with expected stuff.
func Warn(format string, a ...interface{}) {
	var LOGGER_MODE = os.Getenv("LOG_MODE")
	if LOGGER_MODE != "WARN" && LOGGER_MODE != "FULL" && LOGGER_MODE != ""{
		return
	}

	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		loggerWarn.Printf("%s: %s", details, info)

	} else {
		loggerWarn.Printf("%s", info)
	}
}

func Err(format string, a ...interface{}) {
	/* 	var LOGGER_MODE = os.Getenv("LOG_MODE")
	   	if LOGGER_MODE != "ERRORS" && LOGGER_MODE != "FULL" && LOGGER_MODE != "PARTIAL" {
	   		return
	   	}
	*/
	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		loggerErr.Printf("%s: %s", details, info)

	} else {
		loggerErr.Printf("%s", info)
	}
}

func Debug(format string, a ...interface{}) {
	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		loggerDebug.Printf("%s: %s", details, info)

	} else {
		loggerDebug.Printf("%s", info)
	}
}

func Log(format string, a ...interface{}) {
	var LOGGER_MODE = os.Getenv("LOG_MODE")
	if LOGGER_MODE != "ERRORS" && LOGGER_MODE != "FULL" && LOGGER_MODE != "PARTIAL" && LOGGER_MODE != ""{
		return
	}

	info := formatMessage(format, a...)
	details := getCallerInformation()

	if details != "" {
		loggerLog.Printf("%s: %s", details, info)

	} else {
		loggerLog.Printf("%s", info)
	}
}


import { useEffect, useState } from 'react';

const initialClock = {
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
	milliseconds: 0,
};

function Clock() {
	const [isClockRunning, setIsClockRunning] = useState(false);
	const [time, setTime] = useState(initialClock);

	const updateClock = () => {
		setTime((curTime) => {
			const updatedTime = {
				...curTime,
				milliseconds: curTime.milliseconds + 1,
			};

			if (updatedTime.milliseconds > 99) {
				updatedTime.milliseconds = 0;
				updatedTime.seconds++;
			}

			if (updatedTime.seconds > 59) {
				updatedTime.seconds = 0;
				updatedTime.minutes++;
			}

			if (updatedTime.minutes > 59) {
				updatedTime.minutes = 0;
				updatedTime.hours++;
			}

			if (updatedTime.hours > 23) {
				updatedTime.hours = 0;
				updatedTime.days++;
			}

			return { ...updatedTime };
		});
	};

	/*
		Take a look at the return statement in the below effect. This is called cleanup functions.
		Cleanup functions only run when the component is rerendered and they run before every other
		code in the component.
	*/
	useEffect(() => {
		if (!isClockRunning) return;

		const intervalId = setInterval(updateClock, 10);
		return () => clearInterval(intervalId);
	}, [isClockRunning]);

	const resetClock = () => {
		setTime({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		});
		setIsClockRunning(false);
	};

	return (
		<div className="container">
			<div className="clock">
				<div className="clock-part">{time.days}</div>
				<div className="clock-part">{time.hours}</div>
				<div className="clock-part">{time.minutes}</div>
				<div className="clock-part">{time.seconds}</div>
				<div className="clock-part">{time.milliseconds}</div>
			</div>
			<button
				className="button"
				onClick={() => setIsClockRunning(!isClockRunning)}
			>
				{time.intervalId ? 'Stop' : 'Start'}
			</button>
			<button className="button" onClick={resetClock}>
				Reset
			</button>
		</div>
	);
}
export default Clock;

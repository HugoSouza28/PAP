import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Calendar = () => {
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

    const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        setSelectedDateTime(selectedDate);
    };

    // Calcula a data mínima (2 dias após a data atual)
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);
    const minDateString = minDate.toISOString().slice(0, -8); // Remove a parte do fuso horário

    // Calcula a data máxima (2 meses após a data atual)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    const maxDateString = maxDate.toISOString().slice(0, -8); // Remove a parte do fuso horário

    return (
        <div className="container">
            <input type="datetime-local" min={minDateString} max={maxDateString} onChange={handleDateTimeChange} />
            {selectedDateTime && (
                <Link to="/reserva-2">
                    <button>Avançar</button>
                </Link>
            )}
        </div>
    );
};

export default Calendar;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


interface Props {
	vehicleType: string;
	handler: (id: string) => void;
}

const vTypes = [
	{value: "utv", label: "UTV"},
	{value: "atv", label: "ATV"},
	{value: "dirtbike", label: "Dirtbike"},
	{value: "camper", label: "Camper"},
	{value: "boat", label: "Boat"},
	{value: "jetski", label: "Jet Ski"},
	{value: "ebike", label: "Electric Bike"},
	{value: "rv", label: "RV"},
	{value: "other", label: "Other"},
]


const VehicleTypeDropdown: FC<Props> = ({ vehicleType, handler}) => {


    const [open, setOpen] = useState(false);



    const handleListboxChange = (selectedVehicleType: string) => {
		handler(selectedVehicleType); 
    };


    return (
        <main>
			<h1 className="mb-3 text-xl font-semibold">Select Vehicle Type</h1>
            <section>
                <Autocomplete
                    id="asynchronous-demo"
                    sx={{
                        width: "100%",
						border: "2px solid #000",
						borderRadius: "8px",
						backgroundColor: "white",

                        "& .MuiInputBase-input": {
                            "--tw-ring-color": "none !important",
							
                        },
                    }}
                    open={open}
                    size="small"
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    value={vTypes.find((v) => v.value === vehicleType) || null}
                    isOptionEqualToValue={(option, value) => option === value}
                    getOptionLabel={(file) => file.label}
                    onChange={(_event, newValue) => {
                        handleListboxChange(newValue?.value || "");
                    }}
                    options={vTypes}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </section>
        </main>		
	)


};

export default VehicleTypeDropdown;

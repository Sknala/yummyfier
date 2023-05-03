import FormatPrepTime from "./formatPrepTime";

//preptime is null
test('Preptime is null', () => {
    const prepTime = FormatPrepTime({readyInMinutes: ""}); 
        expect(prepTime).toEqual('Preptime unknown');
    });

//Preptime is 60 min
test('Preptime is 60 min', () => {
    const prepTime = FormatPrepTime({readyInMinutes: 60}); 
        expect(prepTime).toEqual('1 h');
    });

//preptime is less than 60 min
test('Preptime is less than 60 min', () => {
const prepTime = FormatPrepTime({readyInMinutes: 15}); 
    expect(prepTime).toEqual('15 min');
});

//prep time is more than 60min
test('Preptime is more than 60 min', () => {
    const prepTime = FormatPrepTime({readyInMinutes: 90}); 
        expect(prepTime).toEqual('1h 30 min');
    });


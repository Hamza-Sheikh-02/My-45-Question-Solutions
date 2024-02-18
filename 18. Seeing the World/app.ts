let Places_To_Visit: string[] = ['Dubai','Tokyo','New York','Makkah','Madina'];

console.log('Original Order: ', Places_To_Visit);

console.log('Alphabetical Order: ', [...Places_To_Visit].sort());

console.log('Original Order After Sorting: ', Places_To_Visit);

console.log('Reverse Alphabetical Order: ', [...Places_To_Visit].sort().reverse());

console.log('Original Order After Reverse Sorting: ', Places_To_Visit);

Places_To_Visit.reverse();
console.log('Reversed Order: ', Places_To_Visit);

Places_To_Visit.reverse();
console.log('Back To Original Order: ', Places_To_Visit);

Places_To_Visit.sort();
console.log('Sorted In Alphabetical Order: ', Places_To_Visit);

Places_To_Visit.sort((a, b) => b.localeCompare(a))
console.log('Sorted In Reverse Alphabetical Order: ', Places_To_Visit);

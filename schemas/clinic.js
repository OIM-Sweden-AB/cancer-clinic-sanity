// schemas/pet.js
export default {
  name: 'clinic',
  type: 'document',
  title: 'Radiation Clinic',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'geopoint',
      type: 'geopoint',
      title: 'Geo-Point'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'treatmentType',
      type: 'string',
      title: 'Treatment Type',
    },
    {
      name: 'patientCapacity',
      type: 'number',
      title: 'Patient Capacity',
    },
    {
      name: 'equipment',
      type: 'array',
      title: 'Equipment',
      of: [{type: 'string'}]
    },
    {
      name: 'treatmentDuration',
      type: 'string',
      title: 'Treatment Duration',
    },
    {
      name: 'insuranceAccepted',
      type: 'boolean',
      title: 'Insurance Accepted',
    },
    {
      name: 'staffCount',
      type: 'number',
      title: 'Staff Count',
    },
    {
      name: 'treatmentCost',
      type: 'number',
      title: 'Treatment Cost',
    },
    {
      name: 'waitingList',
      type: 'boolean',
      title: 'Waiting List',
    },
     {
      name: 'grade',
      type: 'number',
      title: 'Grade',
      initialValue: 0,
      options: {
        list: [1, 2, 3, 4, 5]
      }

     }
  ],
}

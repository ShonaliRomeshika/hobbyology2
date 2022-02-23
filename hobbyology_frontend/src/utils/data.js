export const categories = [
    {
      name: 'Gardening',
      image: 'https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      name: 'Photography',
      image: 'https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      name: 'Crafting',
      image: 'https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Dancing',
      image: 'https://images.pexels.com/photos/5888633/pexels-photo-5888633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Music',
      image: 'https://images.pexels.com/photos/675960/mic-music-sound-singer-675960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Cooking',
      image: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Drawing',
      image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Writing',
      image: 'https://images.pexels.com/photos/753695/pexels-photo-753695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }, {
      name: 'Travelling',
      image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
    },
    {
      name: 'Reading',
      image: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }, {
      name: 'Sports',
      image: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }, {
      name: 'Coding',
      image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      name: 'Other',
      image: 'https://images.pexels.com/photos/9008501/pexels-photo-9008501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];




export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };

  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };

  
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
    
      export const pinDetailQuery = (pinId) => {
        const query = `*[_type == "pin" && _id == '${pinId}']{
          image{
            asset->{
              url
            }
          },
          _id,
          title, 
          about,
          category,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
         save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
          comments[]{
            comment,
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          }
        }`;
        return query;
      };
      
      export const pinDetailMorePinQuery = (pin) => {
        const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };

/*
      export const searchQuery = (searchTerm) => {
        const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
              image{
                asset->{
                  url
                }
              },
                  _id,
                  destination,
                  postedBy->{
                    _id,
                    userName,
                    image
                  },
                  save[]{
                    _key,
                    postedBy->{
                      _id,
                      userName,
                      image
                    },
                  },
                }`;
        return query;
      };

*/
      export const userSavedPinsQuery = (userId) => {
        const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };

      export const userCreatedPinsQuery = (userId) => {
        const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };
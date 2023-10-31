import React from 'react';

const fakeTables = [
  {
    rank: 1,
    club: 'Man United',
    matchesPlayed: 17,
    wins: 11,
    draws: 3,
    losses: 3,
    points: 34,
    lastFive: 'WWDWL',
  },
  {
    rank: 1,
    club: 'Man United',
    matchesPlayed: 17,
    wins: 11,
    draws: 3,
    losses: 3,
    points: 34,
    lastFive: 'WWDWL',
  },
  {
    rank: 1,
    club: 'Man United',
    matchesPlayed: 17,
    wins: 11,
    draws: 3,
    losses: 3,
    points: 34,
    lastFive: 'WWDWL',
  },
  {
    rank: 1,
    club: 'Man United',
    matchesPlayed: 17,
    wins: 11,
    draws: 3,
    losses: 3,
    points: 34,
    lastFive: 'WWDWL',
  },
  {
    rank: 1,
    club: 'Man United',
    matchesPlayed: 17,
    wins: 11,
    draws: 3,
    losses: 3,
    points: 34,
    lastFive: 'WWDWL',
  },
  // Add more fake data as needed
];

function Table() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium">Ligue des zouzous</h1>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Club
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      J
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      G
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      N
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      P
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Pts
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Dernier 5 M
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {fakeTables.map((player, index) => (
                    <tr key={index} className="bg-black bg-opacity-20">
                      <td className="pl-4">{player.rank}</td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        <img
                          className="w-5"
                          src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                          alt=""
                        />
                        <span className="ml-2 font-medium">{player.club}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {player.matchesPlayed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.wins}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.draws}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.losses}</td>
                     
                      <td className="px-6 py-4 whitespace-nowrap">{player.points}</td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        {player.lastFive}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

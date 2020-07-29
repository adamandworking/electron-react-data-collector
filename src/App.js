import React from 'react';
import TestingPage from './component/TestingPage'

function App(props) {
    // const testImagePath = ["./image/square.jpg", "./image/square.jpg", "./image/square.jpg", "./image/square.jpg"]
    const testImagePath = ["./image/1.Myopia_Text-02.png", "./image/2.Astigmtism_wheel.png", "./image/3.AMD_amsler grid.png", "./image/4.Retinal Detachment_zhang rign.png"]
    const testInstruction = [[['Wash your hand'], ['Be gentle to everyone'], ['Say goodbye before you leave'], ['Enjoy!']],
                             [['There is a river'], ['There is a tree']],
                             [['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']],
                             [['test1'], ['test2']]
                             ]
    const resultsDescription = [[['You dont have sick'], ['Your are sick']],
                                [['You dont have sick2'], ['Your are sick2']],
                                [['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']],
                                [['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']]
                               ]

    const numberOfQuestion = testImagePath.length

    const testTitle = [
        ["Myopia"],
        ["Astigmtism"],
        ["Amsler"],
        ["Retinal Detachment"]
    ]
    const header = [
        ['Age'],
        ['Gender'],
        ['Continent'],
        ['Myopia'],
        ['Astigmtism'],
        ['AMD_amsler'],
        ['Retinal Detachment'],
    ]
    const timestamp = Math.floor(Date.now() / 1000)

    const fs=window.fs
    fs.appendFile("log/" + String(timestamp) + ".txt", header + ';\n', function (err) {
      if (err) throw err;
    });

    var data = {
        numberOfQuestion,
        testImagePath,
        testInstruction,
        resultsDescription,
        timestamp,
        testTitle,
    }
    return (
        <TestingPage data={data}/>
    )
}

export default App;

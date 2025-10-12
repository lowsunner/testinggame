let allGames: any[] = [];
let currentCategory = 'All';
let currentSearch = '';

const categories = [
    { name: 'All', icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>' },
    { name: 'PC Games', icon: '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g> <path d="M23,28L23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1,0-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28h0 c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z"></path> </g> <path d="M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h6.9h8.1H27c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z M14.7,15.6 c0.4,0.4,0.4,0.9,0.1,1.3c-1,1.3-2.6,2.1-4.3,2.1c-3,0-5.5-2.5-5.5-5.5S7.5,8,10.5,8c1.7,0,3.2,0.8,4.3,2.1c0.3,0.4,0.3,1-0.1,1.3 l-2.1,2.1L14.7,15.6z M17.5,15c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.3,15,17.5,15z M21.5,15 c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S22.3,15,21.5,15z M25.5,15c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5 s1.5,0.7,1.5,1.5S26.3,15,25.5,15z"></path> </g></svg>' },
    { name: 'Action', icon: '<svg fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 454.635 454.635" xml:space="preserve" transform="rotate(45)" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M286.306,301.929h-17.472L295.141,82.85c0.708-5.89-1.709-13.694-5.621-18.155L236.506,4.255 C234.134,1.551,230.785,0,227.317,0s-6.816,1.551-9.188,4.255l-53.015,60.439c-3.912,4.461-6.328,12.266-5.621,18.155 l26.307,219.079h-17.472c-8.412,0-15.256,6.844-15.256,15.256v18.984c0,8.412,6.844,15.256,15.256,15.256h37.118v33.143 c-10.014,6.95-16.588,18.523-16.588,31.609c0,21.206,17.252,38.458,38.458,38.458s38.458-17.252,38.458-38.458 c0-13.086-6.574-24.659-16.588-31.609v-33.143h37.118c8.412,0,15.256-6.844,15.256-15.256v-18.984 C301.562,308.772,294.718,301.929,286.306,301.929z"></path> </g></svg>' },
    { name: 'Adventure', icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.1887 8.07625C17.3085 7.71692 17.215 7.32075 16.9471 7.05292C16.6793 6.78509 16.2831 6.69156 15.9238 6.81134L9.56381 8.93134C9.2652 9.03088 9.03089 9.26519 8.93135 9.5638L6.81135 15.9238C6.69158 16.2831 6.7851 16.6793 7.05293 16.9471C7.32076 17.215 7.71693 17.3085 8.07626 17.1887L14.4363 15.0687C14.7349 14.9692 14.9692 14.7349 15.0687 14.4363L17.1887 8.07625Z" fill="currentColor"></path> </g></svg>' },
    { name: 'Horror', icon: '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <title>ghost_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="System" transform="translate(-720.000000, -240.000000)"> <g id="ghost_fill" transform="translate(720.000000, 240.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M12,2 C16.9706,2 21,6.02944 21,11 L21,19.6207 C21,21.4506 19.0341,22.6074 17.4345,21.7187 L17.0720446,21.5243825 C16.0728067,21.0124062 15.2881947,20.8437981 14.1830599,21.4100628 L13.9846,21.5177 C12.8231222,22.1813611 11.4120698,22.2182312 10.2228615,21.6283102 L10.0154,21.5177 C8.73821,20.7879 7.84896,21.0056 6.56554,21.7187 C4.96587,22.6074 3,21.4506 3,19.6207 L3,11 C3,6.02944 7.02944,2 12,2 Z M8.5,9 C7.67157,9 7,9.67157 7,10.5 C7,11.3284 7.67157,12 8.5,12 C9.32843,12 10,11.3284 10,10.5 C10,9.67157 9.32843,9 8.5,9 Z M15.5,9 C14.6716,9 14,9.67157 14,10.5 C14,11.3284 14.6716,12 15.5,12 C16.3284,12 17,11.3284 17,10.5 C17,9.67157 16.3284,9 15.5,9 Z" id="形状" fill="currentColor"> </path> </g> </g> </g> </g></svg>' },
    { name: 'Shooting', icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M13 2a1 1 0 1 0-2 0v1h2V2ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="currentColor"></path><path fill-rule="evenodd" currentclip-rule="evenodd" d="M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="currentColor"></path><path d="M21 11v2h1a1 1 0 1 0 0-2h-1ZM13 21h-2v1a1 1 0 1 0 2 0v-1ZM3 13v-2H2a1 1 0 1 0 0 2h1Z" fill="currentColor"></path></g></svg>' },
    { name: 'Puzzle', icon: '<svg fill="currentColor" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M224,170.34863,223.99951,208a16.018,16.018,0,0,1-16,16l-42.21924.001H106.21973L63.999,224a16.01791,16.01791,0,0,1-15.99951-16L48,175.78223A36.47481,36.47481,0,0,1,43.99951,176a36,36,0,0,1,0-72A36.47481,36.47481,0,0,1,48,104.21777L47.99951,72a16.018,16.018,0,0,1,16-16l36.21778.001A36.60975,36.60975,0,0,1,99.99951,52a36,36,0,0,1,72,0,36.60975,36.60975,0,0,1-.21777,4.001L207.999,56a16.01812,16.01812,0,0,1,16.00049,16L224,109.65137a7.99966,7.99966,0,0,1-11.05957,7.3916A23.25464,23.25464,0,0,0,204,115.27246c-13.2334,0-24,11.09277-24,24.72754s10.7666,24.72754,24,24.72754a23.25464,23.25464,0,0,0,8.94043-1.77051A7.99966,7.99966,0,0,1,224,170.34863Z"></path> </g></svg>' },
    { name: 'Sports', icon: '<svg fill="currentColor" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M225.98,56.31055a32.13113,32.13113,0,0,0-26.29-26.29053c-31.35058-5.30908-90.43652-7.72363-133.915,35.75439-43.478,43.478-41.064,102.56446-35.75488,133.915a32.13113,32.13113,0,0,0,26.29,26.29053,200.74409,200.74409,0,0,0,33.27637,2.83984c31.082,0,69.78955-7.74511,100.63867-38.59423C233.70361,146.74756,231.28906,87.66113,225.98,56.31055Zm-166.998,153.894a16.11587,16.11587,0,0,1-13.18652-13.18652,184.687,184.687,0,0,1-2.68555-30.59473l46.48267,46.48291A185.002,185.002,0,0,1,58.98193,210.20459ZM165.65674,101.65674,150.6272,116.68652l8.97046,8.97022a8,8,0,0,1-11.31348,11.314L139.31372,128l-11.314,11.314,8.97045,8.97022a7.99983,7.99983,0,1,1-11.31347,11.31348l-8.97046-8.97022-15.02954,15.0293a7.99984,7.99984,0,0,1-11.31348-11.31348l15.02954-15.02978-8.97046-8.97022a8,8,0,0,1,11.31348-11.314L116.68628,128l11.314-11.314-8.97045-8.97022a7.99983,7.99983,0,1,1,11.31347-11.31348l8.97046,8.97022,15.02954-15.0293a7.99984,7.99984,0,0,1,11.31348,11.31348Zm.75024-58.563a185.0087,185.0087,0,0,1,30.61109,2.70166,16.11531,16.11531,0,0,1,13.18652,13.18652,184.687,184.687,0,0,1,2.68555,30.59473Z"></path> </g></svg>' },
    { name: 'Racing', icon: '<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:currentColor;} </style> <g> <path class="st0" d="M67.501,458.65c0,10.304,8.358,18.663,18.671,18.663h51.555c10.322,0,18.68-8.359,18.68-18.663v-38.402H67.501 V458.65z"></path> <path class="st0" d="M355.584,458.65c0,10.304,8.359,18.663,18.688,18.663h51.555c10.305,0,18.664-8.359,18.664-18.663v-38.402 h-88.907V458.65z"></path> <path class="st0" d="M451.831,216.465l-26.209-95c-14.171-51.268-60.809-86.779-113.982-86.779H200.352 c-53.182,0-99.81,35.512-113.966,86.779l-26.217,95C24.985,229.939,0,264.022,0,303.943c0,51.728,41.932,93.668,93.66,93.668 h324.655c51.728,0,93.685-41.941,93.685-93.668C512,264.022,487.006,229.956,451.831,216.465z M93.66,344.241 c-22.267,0-40.306-18.047-40.306-40.298c0-22.276,18.039-40.323,40.306-40.323c22.268,0,40.323,18.048,40.323,40.323 C133.983,326.194,115.928,344.241,93.66,344.241z M368.582,172.668c-1.535,2.011-3.916,3.202-6.446,3.202H149.863 c-2.538,0-4.919-1.191-6.446-3.202c-1.535-2.02-2.053-4.631-1.363-7.078l9.54-34.567c7.554-27.4,32.679-46.539,61.096-46.539 h86.616c28.409,0,53.534,19.14,61.096,46.522l9.533,34.584C370.626,168.038,370.125,170.649,368.582,172.668z M418.315,344.241 c-22.251,0-40.315-18.047-40.315-40.298c0-22.276,18.064-40.323,40.315-40.323c22.276,0,40.323,18.048,40.323,40.323 C458.638,326.194,440.59,344.241,418.315,344.241z"></path> </g> </g></svg>' },
    { name: 'Arcade', icon: '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M25.7,20.3l-13.6-8.2c-1.6-1-3.6-1.2-5.4-0.6c-1.8,0.6-3.3,1.9-4.1,3.6v0c-0.8,1.7-0.8,3.7,0,5.5c0.8,1.7,2.3,3.1,4.1,3.7 l15.1,4.8c0.5,0.2,1,0.2,1.5,0.2c1.9,0,3.6-1.1,4.4-2.8C28.6,24.2,27.8,21.5,25.7,20.3z M9,21c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S10.7,21,9,21z"></path> <path d="M24.5,2c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S30,10.5,30,7.5S27.5,2,24.5,2z"></path> </g></svg>' },
    { name: 'Strategy', icon: '<svg fill="currentColor" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></g></svg>' },
    { name: 'Multiplayer', icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>' }
];

function categorizeGame(game: any): string[] {
    const name = game.name.toLowerCase();
    const categories: string[] = [];

    if (name.includes('shoot') || name.includes('gun') || name.includes('war') || name.includes('battle') || name.includes('fight') || name.includes('tank') || name.includes('zombie') || name.includes('sniper')) categories.push('Action');
    if (name.includes('adventure') || name.includes('quest') || name.includes('explore')) categories.push('Adventure');
    if (name.includes('puzzle') || name.includes('2048') || name.includes('quiz') || name.includes('sudoku') || name.includes('chess') || name.includes('solitaire') || name.includes('minesweeper')) categories.push('Puzzle');
    if (name.includes('gun') || name.includes('shooting') || name.includes('shot') || name.includes('bullet') || name.includes('fortzone') || name.includes('tank') || name.includes('boom') || name.includes('shooter')) categories.push('Shooting');
    if (name.includes('basketball') || name.includes('football') || name.includes('soccer') || name.includes('golf') || name.includes('sport')) categories.push('Sports');
    if (name.includes('racing') || name.includes('car') || name.includes('drive') || name.includes('moto') || name.includes('kart') || name.includes('drift')) categories.push('Racing');
    if (name.includes('run') || name.includes('jump') || name.includes('flappy') || name.includes('slope') || name.includes('dash') || name.includes('vex')) categories.push('Arcade');
    if (name.includes('tower') || name.includes('defense') || name.includes('strategy') || name.includes('td') || name.includes('bloons')) categories.push('Strategy');
    if (name.includes('.io') || name.includes('multiplayer') || name.includes('online')) categories.push('Multiplayer');

    // Default to Arcade if no categories matched
    if (categories.length === 0) categories.push('Arcade');

    return categories;
}

function loadGames() {
    const gamesContainer = document.getElementById('games');
    if (!gamesContainer) return;

    fetch('/json/games.json')
        .then(response => response.json())
        .then(games => {
            allGames = games.map((game: any) => ({
                ...game,
                categories: (game.categories && game.categories.length > 0) ? game.categories : (game.category ? [game.category] : categorizeGame(game))
            }));

            renderCategories();
            renderGames(allGames);

            const searchInput = document.getElementById('searchInput') as HTMLInputElement;
            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    currentSearch = searchInput.value.toLowerCase().trim();
                    filterGames();
                });
            }
        })
        .catch(error => console.error('Error loading games:', error));
}

function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category.name === 'All' ? 'active' : ''}" data-category="${category.name}">
            ${category.icon}
            <span>${category.name}</span>
        </button>
    `).join('');

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = (e.target as HTMLElement).closest('.category-btn') as HTMLElement;
            if (!target) return;
            currentCategory = target.dataset.category || 'All';

            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');

            filterGames();
        });
    });
}

function filterGames() {
    let filtered = allGames;

    if (currentCategory !== 'All') {
        filtered = filtered.filter(game => game.categories.includes(currentCategory));
    }

    if (currentSearch) {
        filtered = filtered.filter(game => game.name.toLowerCase().includes(currentSearch));
    }

    renderGames(filtered);
}

function renderGames(games: any[]) {
    const gamesContainer = document.getElementById('games');
    if (!gamesContainer) return;

    if (games.length === 0) {
        gamesContainer.innerHTML = '<p class="text-white text-center text-lg opacity-70 col-span-full">No games found</p>';
        return;
    }

    gamesContainer.innerHTML = games.map(game => {
        const fallbackImageUrl = `https://mathclass.404.mn/cdn/imgs/${game.image.split('/').pop()}`;
        if (game.url.includes('/cdn/')) {
            return `
            <div class="game-card glass cursor-pointer transform transition-transform" data-link="/play/${game.url.split('/cdn/pc/').pop()}/">
                <img 
                    src="${game.image}" 
                    alt="${game.name} image" 
                    class="game-image"
                    onerror="this.onerror=null;this.src='${fallbackImageUrl}';"
                >
                <div class="p-4">
                    <h3 class="text-white font-medium text-xl">${game.name}</h3>
                </div>
            </div>
        `;
        }
        else {
            return `
            <div class="game-card glass cursor-pointer transform transition-transform" data-link="/play/${game.url}/">
                <img 
                    src="${game.image}" 
                    alt="${game.name} image" 
                    class="game-image"
                    onerror="this.onerror=null;this.src='${fallbackImageUrl}';"
                >
                <div class="p-4">
                    <h3 class="text-white font-medium text-xl">${game.name}</h3>
                </div>
            </div>
        `;
        }

    }).join('');

    document.querySelectorAll('.game-card').forEach(card => {
        if (card.getAttribute('data-link') == '/play/sug/') {
            card.addEventListener('click', () => {
                window.open('https://discord.com/invite/ejP36Bb44r', '_blank');
            });
            return;
        }
        card.addEventListener('click', () => {
            const link = card.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', loadGames);
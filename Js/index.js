const startButton = document.getElementById('Button2');
const startMenu = document.getElementsByClassName('startMenu')[0];
const notePadButton = document.getElementById('Button7');
const notePadCancelButton = document.getElementById('Button9');
const calCulatorButton = document.getElementById('Button6');
const calCulatorCancelButton = document.getElementById('Button8');
const calCulator = document.getElementsByClassName('calCulator')[0];
const notePad = document.getElementsByClassName('notePad')[0];
const powerButtonMenu = document.getElementsByClassName('powerButton')[0];
const powerButton = document.getElementById('Button10');
startButton.addEventListener('click', () => {
    if (startMenu.style.bottom == "50px") {
        startMenu.style.bottom = "-650px";
        notePadButton.style.display = 'none';
        calCulatorButton.style.display = 'none';
        powerButton.style.display = 'none';
    }
    else {
        startMenu.style.bottom = "50px";
        setTimeout(() => {
            notePadButton.style.display = 'block';
            calCulatorButton.style.display = 'block';
            powerButton.style.display = 'block';
        }, 500);
        calCulatorButton.addEventListener('dblclick', () => {
            startMenu.style.bottom = "-650px";
            notePadButton.style.display = 'none';
            calCulatorButton.style.display = 'none';
            powerButton.style.display = 'none';
            powerButtonMenu.style.display = 'none';
            setTimeout(() => {
                calCulator.style.display = 'block';
                calCulatorCancelButton.style.display = 'block';
            }, 150);
        })
        calCulatorCancelButton.addEventListener('click', () => {
            setTimeout(() => {
                calCulator.style.display = 'none';
                calCulatorCancelButton.style.display = 'none';
            }, 150);
        })
        notePadButton.addEventListener('dblclick', () => {
            startMenu.style.bottom = "-650px";
            notePadButton.style.display = 'none';
            calCulatorButton.style.display = 'none';
            powerButton.style.display = 'none';
            powerButtonMenu.style.display = 'none';
            setTimeout(() => {
                notePad.style.display = 'block';
                notePadCancelButton.style.display = 'block';
            }, 150);
        })
        notePadCancelButton.addEventListener('click', () => {
            setTimeout(() => {
                notePad.style.display = 'none';
                notePadCancelButton.style.display = 'none';
            }, 150);
        })
        powerButton.addEventListener('click', () => {
            setTimeout(() => {
                powerButtonMenu.style.display = 'block';
            }, 150);
        })
    }
});
const widgetButton = document.getElementById('Button1');
const widgets = document.getElementsByClassName('widgets')[0];
widgetButton.addEventListener('mouseover', () => {
    // console.log('MouseOver');
    widgets.style.display = "block";
});
widgetButton.addEventListener('mouseleave', () => {
    widgets.style.display = "none";
    // console.log('MouseLeave');
});
const rightMenu = document.getElementsByClassName('rightMenu')[0];
const notificationButton = document.getElementById('Button4');
notificationButton.addEventListener('click', () => {
    rightMenu.style.display = "block";
});
const fileExplorerButton = document.getElementById('Button3');
const fileExplorer = document.getElementsByTagName('body')[0];
const video = document.getElementsByTagName('video')[0];
const desktopIcons = document.getElementsByClassName('desktopIcons')[0];
const cancelButton = document.getElementById('Button5');
fileExplorerButton.addEventListener('dblclick', () => {
    fileExplorer.style.backgroundImage = "url('myImages/fileExplorer.png')";
    fileExplorer.style.backgroundSize = 'cover';
    video.style.display = 'none';
    desktopIcons.style.display = 'none';
    cancelButton.style.display = 'block';
    cancelButton.addEventListener('click', () => {
        video.style.display = 'block';
        // fileExplorer.style.backgroundImage = "url('/Img, Video & Audio/bg.jpeg')";
        fileExplorer.style.backgroundImage = "none";
        cancelButton.style.display = 'none';
        desktopIcons.style.display = 'flex';
    })
})
const rightClickMenu = document.getElementsByClassName('rightClick')[0];
document.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(startButton);
    // console.log(notificationButton);
    if (e.target == startButton || e.target == notificationButton || e.target == fileExplorerButton || e.target == notePadButton || e.target == calCulatorButton || e.target == notePadCancelButton || e.target == calCulatorCancelButton || e.target == cancelButton || e.target == powerButton) {
        // console.log('If is working');
    }
    else {
        startMenu.style.bottom = "-650px";
        rightMenu.style.display = "none";
        notePadButton.style.display = 'none';
        calCulatorButton.style.display = 'none';
        powerButtonMenu.style.display = 'none';
        powerButton.style.display = 'none';
        rightClickMenu.style.display = 'none';
    }
});
document.addEventListener('contextmenu', (e) => {
    // console.log('Right Click Event');
    // console.log(`${e.clientX} - x`);
    // console.log(`${e.clientY} - y`);
    e.preventDefault();
    rightClickMenu.style.top = `${e.clientY}px`;
    rightClickMenu.style.left = `${e.clientX}px`;
    rightClickMenu.style.display = 'block';
})


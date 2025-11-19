document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", async () => {
    startBtn.style.display = "none";

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.querySelector("#ar-container"),
      imageTargetSrc: "./targets/target.mind"
    });

    const { renderer, scene, camera } = mindarThree;

    const anchor = mindarThree.addAnchor(0);

    const texture = new THREE.TextureLoader().load("./assets/art1.jpg");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(1, 1.2);
    const plane = new THREE.Mesh(geometry, material);

    anchor.group.add(plane);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  });
});

export function AddFilter(
    filter: string,
    id: string,
    setProperties: any,
    properties: any
) {
    setProperties({ ...properties, category: filter });
    const imgBlackType = document.getElementById(id);
    const allImages = document.querySelectorAll('.imageFilter');
    allImages.forEach((item) => {
        if (item.classList.contains('mystyle')) {
            item.classList.remove('mystyle');
        }
    });
    console.log(properties);
    (imgBlackType as HTMLElement).classList.toggle('mystyle');
}

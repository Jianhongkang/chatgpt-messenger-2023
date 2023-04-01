'use client'
import useSWR from 'swr'
import Select from 'react-select'


const fetchModels = () => fetch("/api/get-engines")
    .then(res => res.json())
  

function ModelSelection() {
    const { data: models, isLoading } = useSWR("models", fetchModels);
    const { data: model, mutate: setModel } = useSWR("model", {
      fallbackData: "text-davinci-003"
    });
  
    const handleChange = (selectedOption: { value: string; label: string } | null) => {
        if (selectedOption) {
          setModel(selectedOption.value);
        }
      };
    //console.log(models?.modelOptions);
    
    return (
      <div>
        <Select
          className="mt-2"
          options={models?.modelOptions}
          defaultValue={model}
          placeholder={model}
          isSearchable
          isLoading={isLoading}
          menuPosition="fixed"
          classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"
          }}
          onChange={handleChange}
        />
      </div>
   
      
    );
  }
  

export default ModelSelection